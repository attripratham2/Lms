import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { LocaleDate } from '@common';
import { Box, ActionButton, Popover, Stack, Button, Paper } from '@bubbles-ui/components';
import { PluginCalendarIcon, EditIcon } from '@bubbles-ui/icons/outline';
import { PeriodPicker } from '@assignables/components/Assignment/components/ActivityDatesPicker';
import { useFormLocalizations } from '@assignables/components/Assignment/Form';
import { omit } from 'lodash';
import useTranslateLoader from '@multilanguage/useTranslateLoader';
import prefixPN from '@assignables/helpers/prefixPN';
import useMutateAssignableInstance from '@assignables/hooks/assignableInstance/useMutateAssignableInstance';
import { addErrorAlert, addSuccessAlert } from '@layout/alert';
import { useTaskOngoingListLocalizations } from '@assignables/components/Details/components/TaskOngoingList';
import dayjs from 'dayjs';
import { useDateStyles } from './Date.styles';

function DateEditor({ target, opened, onCancel, onChange, start, deadline }) {
  const [value, setValue] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const startDate = new Date(start);
  const deadlineDate = new Date(deadline);

  useEffect(() => {
    setValue({ start: startDate, deadline: deadlineDate });
  }, [opened]);

  const localizations = useFormLocalizations();
  const [t] = useTranslateLoader(prefixPN('activity_deadline_header'));

  return (
    <Popover target={target} opened={opened} position="bottom">
      <Paper color="solid" sx={{ width: 380 }}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const startDateChanged = !dayjs(value.start).isSame(startDate);
            const deadlineChanged = !dayjs(value.deadline).isSame(deadlineDate);

            if (startDateChanged || deadlineChanged) {
              setIsLoading(true);
            }

            const promises = [];
            if (startDateChanged) {
              promises.push(onChange('start', value.start));
            }

            if (deadlineChanged) {
              promises.push(onChange('deadline', value.deadline));
            }

            Promise.all(promises)
              .then(() => {
                onCancel();
              })
              .finally(() => {
                setIsLoading(false);
              });

            if (!startDateChanged && !deadlineChanged) {
              onCancel();
            }
          }}
        >
          <PeriodPicker
            value={value}
            onChange={setValue}
            localizations={omit(localizations?.dates?.fixedType, 'title')}
          />
          <Stack justifyContent="end" spacing="lg" fullWidth sx={{ marginTop: 24 }}>
            <Button variant="link" onClick={onCancel}>
              {t('cancel')}
            </Button>
            <Button type="submit" loading={isLoading}>
              {t('save')}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Popover>
  );
}

export default function DateComponent({ instance, hidden, allowEdit }) {
  const { start, deadline } = instance?.dates ?? {};
  const [isEditing, setIsEditing] = useState(false);
  const ref = useRef();
  const { mutateAsync } = useMutateAssignableInstance();

  const { dashboardLocalizations } = useTaskOngoingListLocalizations();

  const { classes } = useDateStyles();

  if (!deadline || hidden) {
    return null;
  }
  console.log('dashboard', dashboardLocalizations);

  return (
    <DateEditor
      opened={isEditing}
      start={start}
      deadline={deadline}
      onCancel={() => setIsEditing(false)}
      onChange={async (type, date) => {
        const newDates = {
          [type]: date,
        };

        try {
          await mutateAsync({ id: instance.id, dates: newDates });

          addSuccessAlert(dashboardLocalizations[type].messages.success);
        } catch (e) {
          addErrorAlert(
            dashboardLocalizations[type].messages.error.replace('{{error}}', e.message)
          );
        }
      }}
      target={
        <Box className={classes.root} ref={ref}>
          <Box className={classes.icon}>
            <PluginCalendarIcon width={18} height={18} />
          </Box>
          <Box className={classes.text}>
            <LocaleDate date={deadline} options={{ dateStyle: 'short' }} />
          </Box>
          {!!allowEdit && (
            <ActionButton icon={<EditIcon />} size="sm" onClick={() => setIsEditing(true)} />
          )}
        </Box>
      }
    />
  );
}

DateComponent.propTypes = {
  instance: PropTypes.shape({
    dates: PropTypes.shape({ deadline: PropTypes.string }),
  }),
  hidden: PropTypes.bool,
  allowEdit: PropTypes.bool,
};
