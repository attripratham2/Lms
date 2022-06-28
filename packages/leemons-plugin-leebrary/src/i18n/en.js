module.exports = {
  home: {
    navbar: {
      title: 'Library',
      quickAccess: 'Quick access',
      uploadButton: 'Upload or create',
      createNewTitle: 'Create new',
      uploadTitle: 'Upload file',
      fileUploadTitle: 'Click to browse your file',
      fileUploadSubtitle: 'or drop here a file from your computer',
    },
  },
  assetSetup: {
    header: {
      back: 'Back',
      close: 'Close',
      title: 'Library',
    },
    basicData: {
      header: {
        stepLabel: 'Basic data',
        titleNew: 'New resource',
        titleEdit: 'Edit resource',
        back: 'Back',
      },
      bookmark: {
        title: 'New bookmark',
      },
      labels: {
        title: 'Upload file',
        featuredImage: 'Featured image',
        tags: 'Tags',
        addTag: 'Add tag',
        browseFile: 'Click to browse your file',
        dropFile: 'or drop here a file from your computer',
        changeImage: 'Change image',
        uploadButton: 'Upload image',
        search: 'Search from library',
        submitForm: 'Add to library',
        submitChanges: 'Save changes',
        name: 'Name',
        tagline: 'Tagline',
        description: 'Description',
        createdSuccess: 'Asset successfully created',
        updatedSuccess: 'Asset successfully updated',
        url: 'URL (webpage link)',
        checkUrl: 'Check url',
        wordCounter: {
          single: 'Word',
          plural: 'Words',
        },
        preview: 'Thumbnail preview',
      },
      descriptions: {
        featuredImage: "Only if you want to change the webpage's default featured image",
      },
      placeholders: {
        tagsInput: 'Name of tag',
        name: 'Name of the resource',
        tagline: 'Tagline of the resource',
        tags: 'Tags of the resource',
        url: 'Webpage link',
        description: 'Description of the resource',
        color: 'Select a color',
      },
      errorMessages: {
        name: {
          required: 'Name is required',
        },
        url: {
          required: 'URL is required',
        },
        file: {
          required: 'File is required',
          rejected: 'File was rejected',
        },
        tags: {
          required: 'Write a tag to add it',
        },
      },
    },
    permissionsData: {
      header: {
        stepLabel: 'Permissions',
        shareTitle: 'Share resource',
        close: 'Close',
      },
      labels: {
        title: 'Resource permissions',
        addUsers: 'Add users',
        addUsersDescription: 'To share resource and set permissions',
        isPublic: 'This resource is public',
        saveButton: 'Save permissions',
        shareButton: 'Share',
        addUserButton: 'Add',
        editUserButton: 'Edit',
        removeUserButton: 'Remove',
        acceptButton: 'Accept',
        cancelButton: 'Cancel',
        permissionsSuccess: 'Permissions successfully established',
        shareSuccess: 'Resource successfully shared',
      },
      placeholders: {
        userInput: 'Start typing a name',
        userRole: 'Select role',
      },
      errorMessages: {
        user: {
          required: 'User is required',
        },
        userRole: {
          required: 'Role is required',
        },
        share: {
          required: 'You are not allowed to share this resource',
        },
      },
    },
    roleLabels: {
      viewer: 'Viewer',
      commentor: 'Commentor',
      editor: 'Editor',
      owner: 'Owner',
      public: 'Public',
    },
  },
  list: {
    show: 'Show',
    goTo: 'Go to',
    tableLabels: {
      name: 'Name',
      owner: 'Owner',
      updated: 'Last change',
    },
    labels: {
      duplicateSuccess: 'Asset successfully duplicated',
      removeSuccess: 'Asset successfully removed',
      pinnedSuccess: 'Asset successfully pinned',
      unpinnedSuccess: 'Asset successfully unpinned',
      listEmpty: 'No assets found',
      listEmptyDescription:
        'Thanks to Leemons Libraries, teachers can manage assignments, tests, sessions... and both teachers and students can create and share multi-media files and save their favorite web pages.',
      searchListEmpty: 'No assets found with these search criteria',
      searchListEmptyDescription:
        'Try searching by keywords (tags) or type in more generic and then use the filters to refine your search.',
      copy: 'Copy',
      copied: 'Copied',
      sharedWith: 'Shared with',
      sharedViewAll: 'View all',
      sharedWithEverybody: 'Shared with everybody',
      showPublic: 'Show public assets',
      resourceTypes: 'Type of resource',
      allResourceTypes: 'All types',
    },
    cardToolbar: {
      edit: 'Edit',
      duplicate: 'Duplicate',
      download: 'Download',
      delete: 'Delete',
      share: 'Share',
      assign: 'Assign',
      pin: 'Pin',
      unpin: 'Unpin',
      toggle: 'Toggle',
      open: 'Open',
    },
  },
};
