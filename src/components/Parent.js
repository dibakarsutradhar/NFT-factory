import React from 'react';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Button,
  Container,
  Field,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';

const Parent = ({ formData, setForm, navigation }) => {
  const { groupTicker, groupName, parentImg, groupInitialQuantity } = formData;
  const { /*acceptedFiles,*/ getRootProps, getInputProps } = useDropzone();
  console.log(groupTicker);

  /*const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  */

  return (
    <ThemeProvider theme={ theme }>
      <Container as='form' p={4} sx={{
        maxWidth: '720px',
        m: '0 auto',
        textAlign: 'center'
      }}>
        <h2 sx={{ variant: theme.styles.h2 }}>Create NFT Group Elements</h2>
        <Box sx={{
          p: 2,
          borderRadius: 4,
          boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)'
        }}>
          <Box m={2}>
            <Field
              label='Ticker'
              name='groupTicker'
              defaultValue={groupTicker}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Name'
              name='groupName'
              defaultValue={groupName}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              { ...getRootProps }
              { ...getInputProps } 
              label='Drag and Drop your NFT here, or click to select files'
              name='parentImg'
              defaultValue={parentImg}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              { ...getRootProps }
              label='Image'
              name='parentImg'
              defaultValue={parentImg}
              onChange={setForm}
              mb={3}
              aria-autocomplete='none'
            />
            <Field
              label='Initial Quanitiy'
              name='groupInitialQuantity'
              defaultValue={groupInitialQuantity}
              onChange={setForm}
              aria-autocomplete='none'
            />
            <Button
              variant='buttons.primary' 
              my={3}
              onClick={() => navigation.next()}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Parent
