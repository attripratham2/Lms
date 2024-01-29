import React, { useMemo, useEffect } from 'react';
import { keys, isEmpty } from 'lodash';
import { Box } from '@bubbles-ui/components';
import { useTextEditor } from '@common/context';
import { useEditorLabels } from '@common/hooks/useEditorLabels';
import { ContentEditorInputStyles } from './ContentEditorInput.styles';
import {
  CONTENT_EDITOR_INPUT_DEFAULT_PROPS,
  CONTENT_EDITOR_INPUT_PROP_TYPES,
} from './ContentEditorInput.constants';
import { Schema } from './components/Schema/Schema';
import { TextEditorContent } from './components/TextEditorContent/TextEditorContent';
import { useContentEditorStore } from './context/ContentEditorInput.context';

const ContentEditorInput = ({
  toolbars,
  children,
  schemaLabel,
  openSchema,
  useSchema,
  editorStyles,
  Footer,
  toolbarPortal,
  compact,
  ...props
}) => {
  const editorLabels = useEditorLabels();
  const setIsSchemaOpened = useContentEditorStore((state) => state.setIsSchemaOpened);

  const { textEditorTools } = useTextEditor();

  const leemonsTools = useMemo(() => {
    const tools = [];

    if (textEditorTools) {
      keys(textEditorTools).forEach((key) => {
        if (textEditorTools[key].tool) {
          tools.push({
            id: key,
            tool: textEditorTools[key].tool,
            props: textEditorTools[key].props,
          });
        }
      });
    }

    return tools;
  }, [toolbars, textEditorTools]);

  // ··································································
  // STYLES

  const { classes } = ContentEditorInputStyles(
    { hasFooter: !!Footer },
    { name: 'ContentEditorInput' }
  );

  useEffect(() => {
    setIsSchemaOpened(openSchema);
  }, [openSchema]);

  if (isEmpty(editorLabels)) return null;

  return (
    <Box className={classes.root}>
      {useSchema && <Schema schemaLabel={schemaLabel} compact={compact} />}
      <Box className={classes.textEditorContainer}>
        <TextEditorContent
          {...props}
          leemonsTools={leemonsTools}
          toolbars={toolbars}
          useSchema={useSchema}
          editorLabels={editorLabels}
          toolbarPortal={toolbarPortal}
          compact={compact}
        >
          {children}
        </TextEditorContent>
        {!!Footer && Footer}
      </Box>
    </Box>
  );
};

ContentEditorInput.defaultProps = CONTENT_EDITOR_INPUT_DEFAULT_PROPS;
ContentEditorInput.propTypes = CONTENT_EDITOR_INPUT_PROP_TYPES;

export default ContentEditorInput;
