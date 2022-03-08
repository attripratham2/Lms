const { tasks } = require('../table');
const removeTags = require('../tags/remove');
const removeVersion = require('./versions/remove');
const removeAttachments = require('../attachments/remove');
const parseId = require('./helpers/parseId');
const emit = require('../events/emit');
const deleteSubjects = require('./subjects/delete');
const deleteTags = require('../tags/remove');
const deleteObjectives = require('./objectives/remove');
const deletecontents = require('./contents/remove');
const deleteAssessmentCriteria = require('./assessmentCriteria/remove');

module.exports = async function remove(taskID, { transacting: t } = {}) {
  return global.utils.withTransaction(
    async (transacting) => {
      try {
        const { fullId, id } = await parseId(taskID, null, { transacting });
        // EN: Before removing the task, we need to delete the associated elements.
        // ES: Antes de eliminar la tarea, necesitamos eliminar los elementos asociados.

        // EN: Remove the tags.
        // ES: Eliminar las etiquetas.
        await removeTags(fullId, [], { transacting });

        // EN: Remove the attachments.
        // ES: Eliminar los adjuntos.
        await removeAttachments(fullId, [], { transacting });

        // EN: Finally, we can remove the task.
        // ES: Finalmente, podemos eliminar la tarea.
        const task = await tasks.deleteMany({ id: fullId }, { transacting });

        // EN: Remove the task versioning.
        // ES: Eliminar el versionado de la tarea.
        await removeVersion(fullId, { transacting });

        // EN: Remove the subjects
        // ES: Eliminar las asignaturas
        await deleteSubjects(fullId, undefined, { transacting });

        // EN: Remove tags
        // ES: Eliminar etiquetas
        await deleteTags(fullId, undefined, { transacting });

        // EN: Remove objectives
        // ES: Eliminar objetivos
        await deleteObjectives(fullId, undefined, { transacting });

        // EN: Remove contents
        // ES: Eliminar contenidos
        await deletecontents(fullId, undefined, { transacting });

        // EN: Remove assessment criteria
        // ES: Eliminar criterios de evaluación
        await deleteAssessmentCriteria(fullId, undefined, { transacting });

        // EN: Emit the event.
        // ES: Emitir el evento.
        emit(['task.remove', `task.${id}.remove`], { id });

        return {
          soft: task.soft,
          versionsDeleted: task.count,
        };
      } catch (e) {
        throw new Error(`Error removing task: ${e.message}`);
      }
    },
    tasks,
    t
  );
};
