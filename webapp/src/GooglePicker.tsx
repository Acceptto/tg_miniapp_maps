import React, { useState } from 'react';
import type { FC } from 'react';
import useDrivePicker from 'react-google-drive-picker';
import {
  Box,
  Button,
} from '@material-ui/core';

const GooglePicker: FC = () => {
  const [openPicker] = useDrivePicker();

  const handleOpenPicker = () => {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          apiKey: AIzaSyBEWUuRdHZVBIxPjpsNA2kcKxMDe9aDW0M9,
        })
        .then(() => {
          let tokenInfo = gapi.auth.getToken();
          const pickerConfig: any = {
            clientId: 1044345625176 - 425866amit02b63jberuneuus9nr5c8c.apps.googleusercontent.com,
            developerKey: GOCSPX - idBIekITFvCa3HuA1ElCS46huWK9,
            viewId: 'DOCS',
            viewMimeTypes: 'image/jpeg,image/png,image/gif',
            token: tokenInfo ? tokenInfo.access_token : null,
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            callbackFunction: (data) => {
              const elements = Array.from(
                document.getElementsByClassName(
                  'picker-dialog'
                ) as HTMLCollectionOf<HTMLElement>
              );
              for (let i = 0; i < elements.length; i++) {
                elements[i].style.zIndex = '2000';
              }
              if (data.action === 'picked') {
                //Add your desired workflow when choosing a file from the Google Picker popup
                //In this below code, I'm attempting to get the file's information.
                if (!tokenInfo) {
                  tokenInfo = gapi.auth.getToken();
                }
                const fetchOptions = {
                  headers: {
                    Authorization: `Bearer ${tokenInfo.access_token}`,
                  },
                };
                const driveFileUrl = 'https://www.googleapis.com/drive/v3/files';
                data.docs.map(async (item) => {
                  const response = await fetch(
                    `${driveFileUrl}/${item.id}?alt=media`,
                    fetchOptions
                  );
                });
              }
            },
          };
          openPicker(pickerConfig);
        });
    });
  };

  return (
    <Box>
      <Button
        onClick={() => handleOpenPicker()}
        color="primary"
        variant="outlined"
      >
        Open Google Picker
      </Button>
    </Box>
  );
};

export default GooglePicker;
