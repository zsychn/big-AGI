import * as React from 'react';

import type { SxProps } from '@mui/joy/styles/types';
import { Box, IconButton, styled, Tooltip } from '@mui/joy';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';

import { ChatMessageMemo } from '../../apps/chat/components/message/ChatMessage';

import type { DLLMId } from '~/modules/llms/store-llms';

import { useLLMSelect } from '~/common/components/forms/useLLMSelect';

import { BeamStoreApi, useBeamStoreRay } from './store-beam';


// component configuration
const SHOW_DRAG_HANDLE = false;


const rayCardClasses = {
  active: 'beamRay-Active',
} as const;

export const RayCard = styled(Box)(({ theme }) => ({
  '--Card-padding': '1rem',

  padding: 'var(--Card-padding)',

  backgroundColor: theme.vars.palette.background.surface,

  border: '1px solid',
  borderColor: theme.vars.palette.neutral.outlinedBorder,
  borderRadius: theme.radius.md,

  [`&.${rayCardClasses.active}`]: {
    boxShadow: 'inset 0 0 0 2px #00f, inset 0 0 0 4px #00a',
  },

  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--Pad_2)',
}));
RayCard.displayName = 'RayCard';


const chatMessageEmbeddedSx: SxProps = {
  // style: to undo the style of ChatMessage
  border: 'none',
  m: 0,
  px: 0,
  py: 0,
} as const;


export function BeamRay(props: {
  beamStore: BeamStoreApi,
  index: number,
  isMobile: boolean,
  gatherLlmId: DLLMId | null,
}) {

  // external state
  const { ray, setRayLlmId, clearRayLlmId } = useBeamStoreRay(props.beamStore, props.index);
  const isLinked = !!props.gatherLlmId && !ray.scatterLlmId;
  const [rayLlm, rayLlmComponent] = useLLMSelect(isLinked ? props.gatherLlmId : ray.scatterLlmId, setRayLlmId, '', true);

  return (
    <RayCard>

      {/* Controls Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {SHOW_DRAG_HANDLE && (
          <IconButton disabled size='sm' sx={undefined /*{ ml: 'calc(-0.5 * var(--Card-padding))' }*/}>
            <DragIndicatorIcon />
          </IconButton>
        )}
        <Box sx={{ flex: 1 }}>
          {rayLlmComponent}
        </Box>
        <Tooltip title={isLinked ? undefined : 'Link Model'}>
          <IconButton disabled={isLinked} size='sm' onClick={clearRayLlmId}>
            {isLinked ? <LinkIcon /> : <LinkOffIcon />}
          </IconButton>
        </Tooltip>
      </Box>

      {(!!ray.message && !!ray.message.updated) && (
        <ChatMessageMemo
          message={ray.message}
          fitScreen={props.isMobile}
          showAvatar={false}
          adjustContentScaling={-1}
          sx={chatMessageEmbeddedSx}
        />
      )}

    </RayCard>
  );
}