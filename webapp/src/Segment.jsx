import { useState } from 'react';
import { FixedLayout, SegmentedControl } from '@xelene/tgui';
import Community from './Community'; // Import your Community component
import Friends from './Friends'; // Import your Friends components

const labels = [
	{
		label: 'Community',
		value: 'community',
	},
	{
		label: 'You&Friends',
		value: 'friends',
	},
];

const Segment = () => {
	const [selected, setSelected] = useState(labels[0].value);

	const renderContent = () => {
		switch (selected) {
			case 'community':
				return <Community />;
			case 'friends':
				return <Friends />;
			default:
				return null;
		}
	};

	return (
		<div
			style={{
				height: 200,
				width: 400,
			}}
		>
			<FixedLayout
				vertical="top"
				style={{
					padding: 16,
				}}
			>
				<SegmentedControl style={{ maxWidth: 400, margin: '0 auto' }}>
					{labels.map(({ value, label }) => (
						<SegmentedControl.Item
							key={value}
							selected={selected === value}
							onClick={() => setSelected(value)}
						>
							{label}
						</SegmentedControl.Item>
					))}
				</SegmentedControl>
			</FixedLayout>
			<div>{renderContent()}</div>{' '}
		</div>
	);
};

export default Segment;
