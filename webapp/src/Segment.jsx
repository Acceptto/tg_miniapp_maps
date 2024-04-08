import { useState } from 'react';
import { FixedLayout, SegmentedControl } from '@xelene/tgui';

const labels = [
	{
		label: 'Label',
		value: 'label',
	},
	{
		label: 'Label 2',
		value: 'label2',
	},
	{
		label: 'Label 3',
		value: 'label3',
	},
];

const Segment = () => {
	const [selected, setSelected] = useState(labels[0].value);

	return (
		<FixedLayout vertical="top" style={{ padding: '16px' }}>
			<SegmentedControl style={{ width: 300 }}>
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
