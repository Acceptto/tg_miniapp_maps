import { useState } from 'react';
import { FixedLayout, SegmentedControl } from '@xelene/tgui';

const labels = [
	{
		label: 'Community',
		value: 'label',
	},
	{
		label: 'You&Friends',
		value: 'label2',
	},
];

const Segment = () => {
	const [selected, setSelected] = useState(labels[0].value);

	return (
		<FixedLayout vertical="top" style={{ padding: '16px' }}>
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
	);
};

export default Segment;
