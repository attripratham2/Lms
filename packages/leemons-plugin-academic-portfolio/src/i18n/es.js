module.exports = {
  welcome_page: {
    page_title: 'Portafolio Académico',
    page_description:
      'El portafolio permite crear programas o etapas educativas y añadir asignaturas con curso, grupo, profesores... dentro de esta información, creamos un árbol visual para poder gestionar el portafolio, asignar alumnos, crear clusters, editar reglas y mucho más',
    hide_info_label: `Ok, ya lo tengo. Cuando la configuración esté completa, no muestres más esta información`,
    step_profiles: {
      title: 'Vincular perfiles',
      description:
        'El portafolio académico debe aclarar cuáles son los perfiles clave a trabajar. Sólo tendrá que hacerlo una vez.',
      btn: 'Vincular perfiles',
    },
    step_programs: {
      title: `Crear programas`,
      description:
        'Primaria, Secundaria, Bachillerato, Máster... define los programas y cursos que se ofrecen en tu organización',
      btn: 'Crear programas',
    },
    step_subjects: {
      title: 'Añadir asignaturas',
      description:
        'Con carga masiva o manualmente, crea tu portafolio de asignaturas relacionadas con un programa y curso específico.',
      btn: 'Añadir asignaturas',
    },
    step_tree: {
      title: 'Gestiona tu portafolio académico',
      description:
        'Define el tipo de árbol para tu sistema educativo específico y asiste a los estudiantes, crea grupos o edita la información',
      btn: 'Crea tu árbol',
    },
  },
  programs_page: {
    page_title: 'Programas de aprendizaje',
    page_description:
      'Primaria, Secundaria, Bachillerato, Máster... define los programas y cursos que se ofrecen en tu organización. Si no tiene etapas tradicionales, puede crear programas o cursos simples en su lugar',
    errorNoEvaluationSystems:
      'No hay sistemas de evaluación disponibles. Por favor, cree uno o mas sistema de evaluación',
    errorNoEvaluationSystemsGoTo: 'Ir a sistemas de evaluación',
    common: {
      select_center: 'Selecciona centro',
      add_program: 'Añadir nuevo programa',
      create_done: 'Programa creado',
      update_done: 'Programa actualizado',
    },
    setup: {
      title: 'Configurar un nuevo programa',
      editTitle: 'Editar programa',
      basicData: {
        step_label: 'Datos básicos',
        labels: {
          title: 'Datos básicos',
          name: 'Nombre del programa',
          abbreviation: 'Abreviatura del programa:',
          evaluationSystem: 'Sistema de evaluación:',
          creditSystem: 'No es necesario el sistema de créditos',
          credits: 'Total de créditos',
          oneStudentGroup: 'Este programa sólo tiene un grupo de estudiantes',
          groupsIDAbbrev: 'Abreviatura del ID del grupo',
          maxGroupAbbreviation: 'Longitud máxima de la abreviatura de los grupos:',
          maxGroupAbbreviationIsOnlyNumbers: 'Sólo números',
          buttonNext: 'Siguiente',
        },
        descriptions: {
          maxGroupAbbreviation:
            'Si necesita crear más de un grupo de estudiantes (aulas) por asignatura, esta configuración le permite definir el formato de ID alfanumérico.',
        },
        placeholders: {
          name: 'Mi impresionante programa',
          abbreviation: 'HIGSxxxx',
        },
        helps: {
          abbreviation: '(8 char. max)',
          maxGroupAbbreviation: '(i.e: G01, G02, G03...)',
        },
        errorMessages: {
          name: { required: 'Campo requerido' },
          abbreviation: { required: 'Campo requerido' },
          evaluationSystem: { required: 'Campo requerido' },
          maxGroupAbbreviation: { required: 'Campo requerido' },
        },
      },
      coursesData: {
        step_label: 'Cursos',
        labels: {
          title: 'Cursos',
          oneCourseOnly: 'Este programa tiene un solo curso',
          hideCoursesInTree:
            'Cursos ocultos en el árbol (no asignaturas anidadas detrás de los cursos)',
          moreThanOneAcademicYear: 'La misma asignatura puede ofrecerse en más de un año académico',
          maxNumberOfCourses: 'Número de cursos',
          courseCredits: 'Créditos por curso',
          courseSubstage: 'Subetapas del curso',
          haveSubstagesPerCourse: 'No hay subetapas por curso',
          substagesFrequency: 'Frecuencia',
          numberOfSubstages: 'Número de subetapas',
          subtagesNames: 'Nombre de las subetapas',
          useDefaultSubstagesName: 'Utilizar el nombre y la abreviatura por defecto',
          abbreviation: 'Abreviatura',
          maxSubstageAbbreviation: 'Longitud máxima de la abreviatura',
          maxSubstageAbbreviationIsOnlyNumbers: 'Sólo números',
          buttonNext: 'Siguiente',
          buttonPrev: 'Anterior',
        },
        placeholders: {
          substagesFrequency: 'Selecciona la frecuencia',
        },
        errorMessages: {
          useDefaultSubstagesName: { required: 'Campo requerido' },
          maxNumberOfCourses: { required: 'Campo requerido' },
          courseCredits: { required: 'Campo requerido' },
          substagesFrequency: { required: 'Campo requerido' },
          numberOfSubstages: { required: 'Campo requerido' },
          maxSubstageAbbreviation: { required: 'Campo requerido' },
        },
      },
      subjectsData: {
        step_label: 'Asignaturas',
        labels: {
          title: 'Asignaturas',
          standardDuration: 'Duración estándar de las asignaturas',
          allSubjectsSameDuration:
            'Todas las asignaturas tienen la misma duración que la subetapa de evaluación',
          numberOfSemesters: 'Número de semestres',
          periodName: 'Nombre del periodo',
          numOfPeriods: 'N. períodos',
          substagesFrequency: 'Frecuencia',
          knowledgeAreas: 'Abreviatura de las áreas de conocimiento',
          haveKnowledge: 'El programa tiene áreas de conocimiento',
          maxKnowledgeAbbreviation: 'Longitud máxima de la abreviatura de las áreas:',
          maxKnowledgeAbbreviationIsOnlyNumbers: 'Sólo números',
          subjectsIDConfig: 'Configuración del ID de los sujetos',
          subjectsFirstDigit: 'Primer dígito',
          subjectsDigits: 'Dígitos',
          buttonNext: 'Guardar programa',
          buttonPrev: 'Anterior',
          buttonAdd: 'Añadir',
          buttonRemove: 'Quitar',
        },
        helps: {
          maxKnowledgeAbbreviation: '(i.e: MKTG, MATH, HIST...)',
        },
        errorMessages: {
          periodName: { required: 'Campo requerido' },
          numOfPeriods: { required: 'Campo requerido' },
          substagesFrequency: { required: 'Campo requerido' },
        },
      },
      frequencies: {
        year: 'Anual',
        semester: 'Medio-año(Semestre)',
        quarter: 'Cuatrimestral',
        trimester: 'Trimestral',
        month: 'Mensual',
        week: 'Semanal',
        day: 'Diario',
      },
      firstDigits: {
        course: 'Nº Curso',
        none: 'Ninguno',
      },
    },
  },
  subject_page: {
    page_title: 'Configuración de temas',
    page_description:
      'Configura tus áreas de conocimiento/temas y tipo (troncales, optativas...), después puedes subir tu base de datos de asignaturas o añadirlas manualmente. Después de esto, usted está listo para crear su esquema de portafolio de árbol.',
    centerLabel: 'Centro',
    centerPlaceholder: 'Seleccione un centro',
    programLabel: 'Programa',
    programPlaceholder: 'Selecciona un programa',
    addKnowledgeDone: 'Conocimientos guardados',
    addSubjectTypeDone: 'Tipo de materia guardada',
    subjectCreated: 'Asignatura creada',
    groupCreated: 'Grupo creado',
    classCreated: 'Clase creada',
    classUpdated: 'Clase actualizada',
    goTree: 'Ir al arbol',
    knowledge: {
      title: 'Áreas de conocimiento',
      name: 'Nombre',
      nameRequired: 'Campo obligatorio',
      abbreviation: 'Abbr',
      abbreviationRequired: 'Campo obligatorio',
      color: 'Color',
      colorRequired: 'Campo obligatorio',
      icon: 'Icono',
      creditsCourse: 'Cr. Curso',
      creditsProgram: 'Cr. Program',
      maxLength: 'Longitud máxima: {max}',
      onlyNumbers: 'Sólo números',
    },
    subjectTypes: {
      title: 'Tipos de materias',
      name: 'Nombre',
      nameRequired: 'Campo obligatorio',
      creditsCourse: 'Cr. Curso',
      creditsProgram: 'Cr. Programa',
      groupVisibility: 'Visibilidad del grupo',
      groupVisibilityLabel: 'Evitar grupos anidados',
    },
    subjects: {
      newTitle: 'Nueva asignatura',
      title: 'Asignaturas',
      course: 'Curso',
      id: 'ID',
      idRequired: 'Campo obligatorio',
      courseRequired: 'Campo obligatorio',
      subject: 'Asignatura',
      noSubjectsFound: 'No se encuentran asignaturas',
      subjectRequired: 'Campo requerido',
      knowledge: 'Conocimiento',
      knowledgeRequired: 'Campo requerido',
      subjectType: 'Tipo',
      subjectTypeRequired: 'Campo requerido',
      credits: 'Créditos',
      color: 'Color',
      colorRequired: 'Campo requerido',
      group: 'Grupo',
      substage: 'Substage',
      seats: 'Asientos',
      classroom: 'Aula',
      schedule: 'Horario',
      teacher: 'Profesor',
      description: 'Descripción',
      maxInternalIdLength: 'Deben ser {max} numeros',
      groupAny: 'Deben ser {max} caracteres',
      groupNumbers: 'Deben ser {max} numeros',
    },
    tableActions: {
      add: 'Añadir',
      remove: 'Quitar',
      edit: 'Editar',
      accept: 'Aceptar',
      cancel: 'Cancelar',
    },
    programTreeType: {
      title: 'Schema del árbol',
      description1:
        'Configure la vista de árbol de su cartera para adaptarla a las características específicas de su programa. Puede cambiar esta configuración siempre que lo necesite.',
      note: 'NOTA:',
      description2:
        'Sólo se ven los esquemas que se ajustan a la configuración anterior. La "visibilidad del grupo" (de la configuración del tipo de materia), se respetará independientemente del esquema de árbol elegido.',
      opt1Label: 'Aula primero',
      opt1Description: 'Programa > Curso > Grupo > Tipo > Área > Materia',
      opt1DescriptionNoCourse: 'Programa > Grupo > Tipo > Área > Materia',
      opt2Label: 'Aula + Área primero',
      opt2Description: 'Programa > Curso > Grupo > Área > Tipo > Materia',
      opt2DescriptionNoCourse: 'Programa > Grupo > Área > Tipo > Materia',
      opt3Label: 'Asignatura primero',
      opt3Description: 'Programa > Curso > Tipo > Área > Materia',
      opt3DescriptionNoCourse: 'Programa > Tipo > Área > Materia',
      opt4Label: 'Esquema libre',
      opt4Description: 'Programa > Tipo > Área > Materia',
    },
  },
  profiles_page: {
    page_title: 'Perfiles de la cartera académica',
    page_description:
      'En primer lugar, debemos vincular los perfiles del sistema con los perfiles personalizados que has creado en la plataforma. (Por favor, lee atentamente las características de cada perfil. Una vez vinculados los perfiles, no se puede deshacer)',
    save: 'Guardar',
    profileSaved: 'Perfiles guardados',
    profiles: 'Perfiles',
    teacher: 'Profesor',
    teacherDescription: 'Responsable de impartir las asignaturas de un programa/curso',
    teacherRequired: 'Campo requerido',
    student: 'Estudiante',
    studentDescription:
      'Asignado a un aula, estudia las asignaturas de su programa/curso con un profesor concreto',
    studentRequired: 'Campo requerido',
  },
  tree_page: {
    page_title: 'Árbol de la cartera académica',
    page_description:
      'Este es su árbol de portafolio, puede editar, duplicar o crear nuevos elementos para su programa. También puede asignar a los estudiantes en cualquier nivel (todas las asignaturas por debajo de él heredarán esta tarea).',
    centerLabel: 'Seleccione un centro',
    programLabel: 'Seleccione un programa',
    programUpdated: 'Programa actualizado',
    courseUpdated: 'Curso actualizado',
    groupUpdated: 'Grupo actualizado',
    groupDuplicated: 'Grupo duplicado',
    knowledgeUpdated: 'Area actualizada',
    subjectTypeUpdated: 'Tipo de materia actualizado',
    subjectUpdated: 'Asignatura actualizada',
    classCreated: 'Clase creada',
    classUpdated: 'Clase actualizada',
    treeEdit: 'Editar',
    treeRemove: 'Borrar',
    treeDuplicate: 'Duplicar',
    groupsRemoved: 'Grupo borrado de las clases',
    classRemoved: 'Clase borrada',
    groupCreated: 'Grupo creado',
    subjectTypeCreated: 'Tipo de materia creado',
    knowledgeCreated: 'Area creada',
    newgroups: 'Nuevo grupo',
    newsubjectType: 'Nuevo tipo de asignatura',
    newclass: 'Nueva clase',
    newknowledges: 'Nueva área',
    newsubject: 'Nueva asignatura',
    addUsers: {
      title: 'Asignar estudiantes',
      description:
        'Asignar estudiantes a todas las aulas anidadas en este nivel desde la base de datos de estudiantes.',
      note: 'NOTA:',
      noteDescription:
        'Los alumnos seleccionados se añadirán a las listas de alumnos actuales de cada aula. Si desea consultar o editar un grupo de estudiantes, debe hacerlo directamente en cada aula.',
      byTag: 'Seleccionar por etiqueta',
      byData: 'Buscar por datos de usuario',
      addTag: 'Añadir Tag',
      emailHeader: 'Email',
      nameHeader: 'Nombre',
      surnameHeader: 'Apellidos',
      birthdayHeader: 'Fecha de nacimiento',
      studentsFound: 'Hemos encontrado {{count}} Estudiantes',
      selected: '{{count}} Seleccionados',
      studentsError:
        '{{count}} estudiantes ya están incluidos en todas las clases y no se pueden añadir de nuevo',
      studentsWarning:
        '{{count}} de los estudiantes ya están incluidos en una de las clases y puede añadirlos al resto de las clases.',
      seatsError1: 'Las siguientes clases ya tienen todos sus asientos ocupados:',
      seatsError2:
        'Por favor, accede a cada clase de forma individual y añade los alumnos que necesites, o reduces el número de estudiantes.',
      seatsClassError: '- {{className}} (quedan {{seats}} asientos)',
      addStudent: 'Añadir estudiante',
      userAlreadySelected: 'Este usuario ya está seleccionado',
      removeUser: 'Eliminar',
    },
    program: {
      title: 'Configuración del programa',
      nameLabel: 'Nombre del programa:',
      abbreviationLabel: 'Abreviatura/acrónimo del programa:',
      abbreviationHelper: '8 car. max',
      creditsLabel: 'Total de créditos:',
      nameRequired: 'Campo obligatorio',
      abbreviationRequired: 'Campo obligatorio',
      creditsRequired: 'Campo obligatorio',
      visitProgramDescription: 'Para una mayor configuración tiene que visitar',
      visitProgramLabel: '"Programas educativos"',
      save: 'Guardar',
    },
    course: {
      title: 'Configuración del curso',
      numberLabel: 'Número del curso:',
      nameLabel: 'Alias del curso:',
      nameHelper: 'Por ejemplo, "1er grado"',
      creditsLabel: 'Créditos mínimos:',
      visitProgramDescription: 'Para una mayor configuración tienes que visitar',
      visitProgramLabel: 'Programas educativos',
      save: 'Guardar',
    },
    group: {
      titleNew: 'Nuevo grupo',
      duplicateTitle: 'Duplicar grupo',
      title: 'Configuración del grupo',
      duplicateWarning:
        'Duplicating a group creates new classrooms that inherit the basic configuration of the subjects nested in the current group (such as type, or knowledge area), but you must specify a new set of students, teachers, places, etc... for these new classrooms..',
      abbreviationLabel: 'Abreviatura del grupo:',
      abbreviationHelper: '3 carac. max',
      aliasLabel: 'Alias del grupo:',
      aliasHelper: 'ej, "Grupo principal"',
      aliasRequired: 'Campo obligatorio',
      groupAny: 'Deben ser {max} caracteres',
      groupNumbers: 'Deben ser {max} numeros',
      save: 'Guardar',
      assignSubjects: {
        title: 'Asignar asignaturas',
        description1:
          'Crearemos nuevas aulas para este grupo a partir de las asignaturas seleccionadas, después podrá asignar nuevos alumnos y modificar sus propiedades.',
        notes: 'NOTA:',
        description2:
          'Si desea crear un nuevo grupo manteniendo todas las configuraciones excepto los alumnos asignados, utilice la opción "duplicar" en su lugar.',
      },
    },
    subjectType: {
      titleNew: 'Nuevo tipo de asignatura',
      title: 'Configuración del tipo de asignatura',
      nameLabel: 'Nombre:',
      nameRequired: 'Campo obligatorio',
      crCourse: 'Créditos curso:',
      crProgram: 'Programa de créditos:',
      nested: 'Evitar grupos anidados',
      save: 'Guardar',
      assignSubjects: {
        title: 'Asignar/reasignar asignaturas',
        description:
          'Modificaremos o añadiremos el nuevo tipo a las asignaturas seleccionadas, manteniendo la información restante. Puede hacerlo manualmente arrastrando las asignaturas existentes a este nuevo tipo en el árbol.',
      },
    },
    knowledge: {
      titleNew: 'Nueva área',
      title: 'Configuración del área',
      nameLabel: 'Nombre:',
      nameRequired: 'Campo obligatorio',
      abbreviationLabel: 'Abreviatura:',
      abbreviationHelper: '{max} char',
      abbreviationRequired: 'Campo obligatorio',
      colorLabel: 'Color:',
      colorRequired: 'Campo obligatorio',
      crCourse: 'Créditos curso:',
      crProgram: 'Programa de créditos:',
      maxLength: 'Longitud máxima: {max}',
      save: 'Guardar',
      assignSubjects: {
        title: 'Asignar/reasignar asignaturas',
        description:
          'Modificaremos o añadiremos la nueva área a las asignaturas seleccionadas, manteniendo la información restante. Puede hacerlo manualmente arrastrando las asignaturas existentes a esta nueva área en el árbol.',
      },
    },
    class: {
      title: 'Configuración de la asignatura',
      subjectNameLabel: 'Nombre de la asignatura:',
      subjectNameRequired: 'Campo obligatorio',
      subjectTypeRequired: 'Campo obligatorio',
      knowledgeRequired: 'Campo obligatorio',
      subjectType: 'Tipo',
      knowledge: 'Area',
      classrooms: 'Clases',
      newClassroom: 'Nueva clase',
      save: 'Guardar',
      courseLabel: 'Curso:',
      groupLabel: 'Grupo:',
      substageLabel: 'Sub-etapa:',
      seatsLabel: 'Número de asientos:',
      knowledgeLabel: 'Área:',
      colorLabel: 'Color:',
      scheduleLabel: 'Horario:',
      teacherLabel: 'Profesor principal:',
      teacherDescription: 'Asignar un profesor principal para esta aula',
      studentsLabel: 'Alumnos:',
      addStudents: 'Añadir alumnos',
      addStudentsDescription: 'Añadir alumnos a esta clase',
      cancelAddStudents: 'Cancelar',
      studentsAddedSuccessfully: 'Alumnos añadidos correctamente',
      noStudentsYet: 'Aún no hay alumnos',
      findStudents: 'Buscar',
      changeTeacherButtonLabel: 'Cambiar',
      newClass: 'Nueva clase',
    },
  },
  selectSubjectsByTable: {
    subjectTypeLabel: 'Tipo de asignatura:',
    knowledgeLabel: 'Area:',
    subjectLabel: 'Buscar asignatura:',
  },
  userClassesSwiperWidget: {
    multiCourse: 'Varios cursos',
  },
  tabDetail: {
    label: 'Clase',
  },
};
