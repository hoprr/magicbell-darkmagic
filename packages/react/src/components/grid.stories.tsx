import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { ComponentMeta } from '@storybook/react';
import { Fragment } from 'react';

import * as fake from '~/fixtures';

import { Avatar } from './avatar';
import { Grid } from './grid';
import { IconButton } from './icon-button';
import { Text } from './text';

const meta: ComponentMeta<typeof Grid> = {
  component: Grid,
  args: {
    spacing: 'xs',
    css: {
      gridTemplateColumns: 'min-content 1fr min-content',
    },
    children: fake.listData.map((row) => (
      <Fragment key={row.id}>
        <Grid.Cell>
          <Avatar color={`accent-${(fake.names.indexOf(row.author) % 3) + 1}` as any}>{row.author}</Avatar>
        </Grid.Cell>
        <Grid.Cell>
          <Text primary={row.event} secondary={row.id} />
        </Grid.Cell>
        <Grid.Cell>
          <IconButton size="xs" icon={DotsHorizontalIcon} label="More" variant="ghost" />
        </Grid.Cell>
      </Fragment>
    )),
  },
  argTypes: {
    spacing: { control: 'select' },
  },
};

export default meta;

export const Basic = {};
