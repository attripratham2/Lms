import {
  Box,
  Button,
  ContextContainer,
  PageContainer,
  PageHeader,
  Paper,
  TextInput,
} from '@bubbles-ui/components';
import { useStore } from '@common';
import useRequestErrorMessage from '@common/useRequestErrorMessage';
import { addErrorAlert, addSuccessAlert } from '@layout/alert';
import useTranslateLoader from '@multilanguage/useTranslateLoader';
import prefixPN from '@socket-amazon/helpers/prefixPN';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ConfigPageStyles } from './index.styles';

export default function ConfigPage() {
  const [t] = useTranslateLoader(prefixPN('config'));
  const { classes } = ConfigPageStyles();
  const [, , , getErrorMessage] = useRequestErrorMessage();
  const [store, render] = useStore({});

  const form = useForm();

  async function load() {
    const { config } = await leemons.api(`socket-amazon/config`, {
      allAgents: true,
      method: 'GET',
    });
    form.reset({
      region: config.region,
      accessKeyId: config.accessKeyId,
    });
  }

  async function save() {
    form.handleSubmit(async (data) => {
      try {
        store.saving = true;
        render();

        await leemons.api(`socket-amazon/config`, {
          allAgents: true,
          method: 'POST',
          body: data,
        });

        addSuccessAlert(t('saveDone'));
      } catch (err) {
        addErrorAlert(getErrorMessage(err));
      }
      store.saving = false;
      render();
    })();
  }

  React.useEffect(() => {
    load();
  }, [store.center]);

  return (
    <ContextContainer fullHeight>
      <PageHeader
        values={{
          title: t('title'),
          description: t('description'),
        }}
        fullWidth
      />
      <Paper color="solid" shadow="none" padding="none">
        <PageContainer noFlex>
          <br />
          <Paper fullWidth padding={5}>
            <ContextContainer sx={(theme) => ({ paddingBottom: theme.spacing[5] })}>
              <Box>{t('need')}</Box>
              <code style={{ whiteSpace: 'pre' }}>
                {JSON.stringify(
                  {
                    Version: '2012-10-17',
                    Statement: [
                      {
                        Effect: 'Allow',
                        Action: [
                          'iot:Connect',
                          'iot:Subscribe',
                          'iot:Publish',
                          'iot:Receive',
                          'iot:DescribeEndpoint',
                          'sts:GetFederationToken',
                        ],
                        Resource: '*',
                      },
                    ],
                  },
                  null,
                  2
                )}
              </code>
              <Box sx={(theme) => ({ display: 'flex', width: '100%', gap: theme.spacing[3] })}>
                <Box style={{ width: '100%' }}>
                  <Controller
                    name={`region`}
                    rules={{ required: t('regionRequired') }}
                    control={form.control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        required
                        error={form.formState.errors?.region}
                        label={t('region')}
                        placeholder={t('regionPlaceholder')}
                      />
                    )}
                  />
                </Box>
                <Box style={{ width: '100%' }}>
                  <Controller
                    rules={{ required: t('accessKeyIdRequired') }}
                    name={`accessKeyId`}
                    control={form.control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        required
                        error={form.formState.errors?.accessKeyId}
                        label={t('accessKeyId')}
                      />
                    )}
                  />
                </Box>
                <Box style={{ width: '100%' }}>
                  <Controller
                    rules={{ required: t('secretAccessKeyRequired') }}
                    name={`secretAccessKey`}
                    control={form.control}
                    render={({ field }) => (
                      <TextInput
                        {...field}
                        required
                        error={form.formState.errors?.secretAccessKey}
                        label={t('secretAccessKey')}
                      />
                    )}
                  />
                </Box>
              </Box>
            </ContextContainer>
            <Box className={classes.saveContainer}>
              <Button loading={store.saving} onClick={save}>
                {t('save')}
              </Button>
            </Box>
          </Paper>
        </PageContainer>
      </Paper>
    </ContextContainer>
  );
}
