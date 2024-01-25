import type {Meta, StoryObj} from '@storybook/react';
import {TrailSite} from '../../../../app/components/trail/trail-site/trail-site';

const meta = {
  title: 'components/trail/trail-site',
  component: TrailSite,
} satisfies Meta<typeof TrailSite>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TrailSiteStory: Story = {};