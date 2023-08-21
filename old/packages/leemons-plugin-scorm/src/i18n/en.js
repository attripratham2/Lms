module.exports = {
  scormDetail: {
    basic: 'Basic',
    coverRequired: 'Cover is required',
    coverImage: 'Cover Image',
    coverImageAdd: 'Add image',
    coverImageRemove: 'Delete image',
    categoriesLabel: 'Categories',
    categoryLabel: 'Category',
    addCategory: 'Add category',
    programLabel: 'Program',
    programRequired: 'Field required',
    subjectLabel: 'Subject',
    subjectRequired: 'Field required',
    pageTitle: 'Editing document: {name}',
    pageTitleNew: 'New document: {name}',
    saveDraft: 'Save as draft',
    publish: 'Only publish',
    design: 'Design',
    nameLabel: 'Name',
    nameRequired: 'Field required',
    taglineLabel: 'Tagline',
    taglineRequired: 'Field required',
    summaryLabel: 'Summary',
    summaryRequired: 'Field required',
    tagsLabel: 'Tags',
    addTag: 'Add tag',
    continue: 'Continue',
    previous: 'Previous',
    featuredImage: 'Add featured image',
    savedAsDraft: 'Saved as draft',
    published: 'Published',
  },
  scormList: {
    pageTitle: 'SCORM library',
    nameHeader: 'Name',
    actionsHeader: 'Actions',
    view: 'View',
    show: 'Show',
    goTo: 'Go to',
    published: 'Published',
    draft: 'Drafts',
  },
  scormCard: {
    view: 'Preview',
    edit: 'Edit',
    feedback: 'Feedback',
    assign: 'Assign',
    delete: 'Delete',
    deleted: 'Deleted',
    questions: 'Questions:',
    evaluation: 'Evaluation:',
    gradable: 'Gradable',
    nogradable: 'No gradable',
    task: 'Task',
    toggle: 'Close',
    open: 'Open',
    duplicate: 'Duplicate',
    duplicated: 'Duplicated',
    share: 'Share',
    shared: 'Shared',
  },
  scormSetup: {
    title: 'Add new SCORM package',
    description:
      'To import a SCORM package, it needs to be zipped up (.zip) and needs to have a <strong>imsmanifest.xml</strong> file which describes the course and its content.',
    fileFormatError:
      "Invalid SCORM package. There must be a file 'imsmanifest.xml' in the root of the ZIP file",
    addFile: 'Upload zip file',
    dropFile: 'Click to browse files or drop a computer file here',
    pageTitle: 'General cofig',
    saveDraft: 'Save as draft',
    publish: 'Publish',
    schemaLabel: 'Schema',
    formatLabel: 'Format',
    savedAsDraft: 'Saved as draft',
    published: 'Published',
    publishOptions: 'Publish options',
    onlyPublish: 'Only publish',
    publishAndShare: 'Publish and share',
    publishAndAssign: 'Publish and assign',
    config: 'General configuration',
    schemaVersion: 'SCORM version',
    configHelp:
      'We have extracted some data from the SCORM package for you to confirm or edit. In addition, you can optionally sort this content according to programs or subjects.',
    gradable: 'Contains assessable activities/tests',
    multipleAttempts: 'Allows multiple attempts',
    numberOfAttempts: 'Please indicate the number of questions in this SCORM*',
  },
  scormAssign: {
    assign: 'Assign as task',
    assignDone: 'Content successfully assigned',
    assignNow: 'Assign now',
  },
  scormView: {
    deadline: 'Deadline',
    markAsFinish: 'Mark as finished',
    nextActivity: 'Next activity',

    completionModal: {
      title: 'Activity finished',
      description: 'Your results have been successfully submitted',
      results: 'See results',
      module: 'Go to module',
      ongoing: 'Ongoing activities',
    },
    incompleteAttemptModal: {
      title: 'CAUTION: pending tasks',
      description:
        'You have not completed all the tasks included in this activity. Please review your progress before marking as completed.',
      finish: 'Finish anyway',
      review: 'Review activity',
    },
  },
  scormCorrection: {
    question: 'Question',
    questions: 'Questions',
    result: 'Result',
    completed: 'Completed',
    repeat: 'Repeat activity',
    chatDescription: 'Do you have any questions about this evaluation?',
    chatTeacherDescription: 'Would you like to write a comment?',
    chatButtonStudent: 'Write to your student',
    chatButtonTeacher: 'Write to your teacher',
  },
};