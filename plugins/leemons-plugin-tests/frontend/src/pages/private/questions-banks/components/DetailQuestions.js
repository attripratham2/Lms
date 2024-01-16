import React from 'react';
import PropTypes from 'prop-types';
import { map, noop } from 'lodash';
import {
  ActionButton,
  Alert,
  Box,
  Button,
  ContextContainer,
  Stack,
  Table,
  Text,
  TotalLayoutStepContainer,
  TotalLayoutFooterContainer,
} from '@bubbles-ui/components';
import { ChevLeftIcon, EditIcon, RemoveIcon } from '@bubbles-ui/icons/outline';
import { AddCircleIcon } from '@bubbles-ui/icons/solid';
import { useStore } from '@common';
import { useLayout } from '@layout/context';
import { getQuestionForTable } from '../../../../helpers/getQuestionForTable';
import DetailQuestionForm from './DetailQuestionForm';

export default function DetailQuestions({
  form,
  t,
  stepName,
  store,
  scrollRef,
  onPrev,
  onPublish,
  onSave,
}) {
  const formValues = form.watch();
  const [qStore, qRender] = useStore({
    newQuestion: false,
  });

  const categories = form.watch('categories');

  const { openDeleteConfirmationModal } = useLayout();
  const questions = form.watch('questions');

  function addQuestion() {
    qStore.newQuestion = true;
    qRender();
  }

  function onCancel() {
    qStore.newQuestion = false;
    qStore.questionIndex = null;
    qStore.question = null;
    qRender();
  }

  function onSaveQuestions(question) {
    const currentQuestions = form.getValues('questions') || [];
    if (qStore.questionIndex !== null && qStore.questionIndex >= 0) {
      currentQuestions[qStore.questionIndex] = question;
    } else {
      currentQuestions.push(question);
    }
    form.setValue('questions', currentQuestions);
    onCancel();
  }

  function editQuestion(index) {
    qStore.questionIndex = index;
    qStore.question = (form.getValues('questions') || [])[index];
    qRender();
  }

  function deleteQuestion(index) {
    openDeleteConfirmationModal({
      onConfirm: async () => {
        const newQuestions = form.getValues('questions') || [];
        newQuestions.splice(index, 1);
        form.setValue('questions', newQuestions);
      },
    })();
  }

  function tryHandler(handler = noop) {
    qStore.trySend = true;
    qRender();
    if (questions?.length) {
      handler();
    }
  }

  const showQuestionForm = qStore.newQuestion || qStore.question;

  if (showQuestionForm) {
    return (
      <DetailQuestionForm
        t={t}
        isPublished={formValues.published}
        onSave={onSave}
        onSaveQuestion={onSaveQuestions}
        onCancel={onCancel}
        defaultValues={qStore.newQuestion ? {} : qStore.question}
        categories={categories}
        store={store}
      />
    );
  }

  const tableHeaders = [
    {
      Header: t('questionLabel'),
      accessor: 'question',
      className: 'text-left',
    },
    {
      Header: t('responsesLabel'),
      accessor: 'responses',
      className: 'text-left',
    },
    {
      Header: t('typeLabel'),
      accessor: 'type',
      className: 'text-left',
    },
    {
      Header: t('actionsHeader'),
      accessor: 'actions',
    },
  ];

  return (
    <TotalLayoutStepContainer
      stepName={stepName}
      Footer={
        <TotalLayoutFooterContainer
          fixed
          scrollRef={scrollRef}
          leftZone={
            <Button
              variant="outline"
              leftIcon={<ChevLeftIcon height={20} width={20} />}
              onClick={onPrev}
            >
              {t('previous')}
            </Button>
          }
          rightZone={
            <>
              {!formValues.published ? (
                <Button
                  variant="link"
                  onClick={() => tryHandler(onSave)}
                  disabled={store.saving}
                  loading={store.saving === 'draft'}
                >
                  {t('saveDraft')}
                </Button>
              ) : null}
              <Button
                onClick={() => tryHandler(onPublish)}
                disabled={store.saving || !questions?.length}
                loading={store.saving === 'publish'}
              >
                {t('publish')}
              </Button>
            </>
          }
        />
      }
    >
      <Box>
        <ContextContainer title={t('questionList')}>
          {questions?.length ? (
            <Table
              columns={tableHeaders}
              data={map(questions, (question, i) => ({
                ...getQuestionForTable(question, t),
                actions: (
                  <Stack justifyContent="end" fullWidth>
                    <ActionButton icon={<EditIcon />} onClick={() => editQuestion(i)} />
                    <ActionButton icon={<RemoveIcon />} onClick={() => deleteQuestion(i)} />
                  </Stack>
                ),
              }))}
            />
          ) : (
            <Text>{t('questionListEmpty')}</Text>
          )}
          <Box>
            <Button variant="link" leftIcon={<AddCircleIcon />} onClick={addQuestion}>
              {t('addQuestion')}
            </Button>
          </Box>
          {qStore.trySend && form.formState.errors.questions ? (
            <Alert severity="error" closeable={false}>
              {form.formState.errors.questions?.message}
            </Alert>
          ) : null}
        </ContextContainer>
      </Box>
    </TotalLayoutStepContainer>
  );
}

DetailQuestions.propTypes = {
  form: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  onPublish: PropTypes.func,
  onPrev: PropTypes.func,
  onSave: PropTypes.func,
  stepName: PropTypes.string,
  scrollRef: PropTypes.object,
  store: PropTypes.object,
};
