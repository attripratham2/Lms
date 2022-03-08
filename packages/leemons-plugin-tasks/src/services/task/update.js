const _ = require('lodash');
const emit = require('../events/emit');
const { tasks, tasksVersioning } = require('../table');
const parseId = require('./helpers/parseId');
const { get: getTask } = require('./get');
const getVersion = require('./versions/get');
const upgradeTaskVersion = require('./versions/upgrade');
const deleteSubjects = require('./subjects/delete');
const addSubjects = require('./subjects/add');
const setTags = require('../tags/set');
const setObjectives = require('./objectives/set');
const setContent = require('./contents/set');
const setAssessmentCriteria = require('./assessmentCriteria/set');

module.exports = async function update(
  taskId,
  {
    name,
    tagline,
    level,
    summary,
    cover,
    color,
    methodology,
    recommendedDuration,
    statement,
    development,
    submissions,
    preTask,
    preTaskOptions,
    selfReflection,
    selfReflectionDescription,
    feedback,
    instructionsForTeacher,
    instructionsForStudent,
    state,
    published,
    subjects,
    center,
    program,
    tags,
    objectives,
    content,
    assessmentCriteria,
  },
  { transacting: t } = {}
) {
  return global.utils.withTransaction(
    async (transacting) => {
      try {
        const task = {
          tagline,
          level,
          summary,
          cover,
          color,
          methodology,
          recommendedDuration,
          statement,
          development,
          submissions,
          preTask,
          preTaskOptions: preTaskOptions && JSON.stringify(preTaskOptions),
          selfReflection,
          selfReflectionDescription,
          feedback,
          instructionsForTeacher,
          instructionsForStudent,
          state,
          published,
          center,
          program,
        };

        // EN: Get the id from complete id@version
        // ES: Obtener el id de la id@version completa

        // eslint-disable-next-line prefer-const
        let { id, fullId, version } = await parseId(taskId, null, { transacting });

        // EN: Update task' shared data
        // ES: Actualizar los datos compartidos de la tarea
        if (name) {
          await tasksVersioning.set(
            {
              id,
            },
            { name },
            { transacting }
          );
        }

        if (!Object.values(task).filter((value) => value !== undefined).length) {
          throw new Error('Task not updated due to empty data');
        }

        // EN: Get the task
        // ES: Obtener la tarea
        const taskToUpdate = await getTask(fullId, { transacting });

        if (!taskToUpdate) {
          throw new Error('Task not found');
        }

        // EN: Check if the task is not a draft
        // ES: Comprobar si la tarea no es un borrador
        const { status } = await getVersion(fullId, { transacting });

        if (status === 'published') {
          // TODO: For now, we only support updating the current version and major upgrade
          const [{ last }] = await tasksVersioning.find({ id }, { columns: ['last'], transacting });
          // TODO: For now, we only support updating the current version and major upgrade
          fullId = (await parseId(id, last)).fullId;

          // EN: Register the new task version
          // ES: Registrar la nueva versión de la tarea
          const newVersion = await upgradeTaskVersion(fullId, 'major', { transacting });

          // EN: Get the new fullId and version
          // ES: Obtener la nueva id completa y versión
          fullId = newVersion.fullId;
          version = newVersion.version;
        }

        // TODO: Let the user modify the global task info

        // EN: Update the task
        // ES: Actualizar la tareas
        const newTask = await tasks.set(
          { id: fullId },
          _.omit(_.merge(taskToUpdate, task), ['id']),
          {
            transacting,
          }
        );

        if (subjects) {
          // EN: Remove the old subjects
          // ES: Eliminar las asignaturas antiguas
          await deleteSubjects(fullId, undefined, { transacting });

          // EN: Register the new subjects
          // ES: Registrar las nuevas asignaturas
          if (subjects.length) {
            await addSubjects(fullId, subjects, { transacting });
          }
        }

        if (tags) {
          // EN: Update the tags
          // ES: Actualizar las etiquetas
          await setTags(fullId, tags, { transacting });
        }

        if (objectives) {
          // EN: Update objectives
          // ES: Actualizar objetivos
          await setObjectives(fullId, objectives, { transacting });
        }

        if (content) {
          // EN: Update the content
          // ES: Actualizar el contenido
          await setContent(fullId, content, { transacting });
        }

        if (assessmentCriteria) {
          // EN: Update the assessment criteria
          // ES: Actualizar los criterios de evaluación
          await setAssessmentCriteria(fullId, assessmentCriteria, { transacting });
        }

        // EN: Emit the event.
        // ES: Emitir el evento.
        emit(['task.updated', `task.${id}.updated`], { id, version, changes: task });

        return { ...taskToUpdate, ...newTask, subjects, id, fullId, version };
      } catch (error) {
        throw new Error(`Error updating task: ${error.message}`);
      }
    },
    tasks,
    t
  );
};
