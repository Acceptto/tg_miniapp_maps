import React, { useState } from 'react';
import { SegmentedControl } from '@xelene/tgui';

function Segment() {
	const [selectedValue, setSelectedValue] = useState('option1');

	const handleChange = newValue => {
		setSelectedValue(newValue);
		// Additional logic based on selected value
	};

	return (
		<SegmentedControl>
			<SegmentedControl.Item
				value="option1"
				selected={selectedValue === 'option1'}
				onClick={() => handleChange('option1')}
			>
				Option 1
			</SegmentedControl.Item>
			<SegmentedControl.Item
				value="option2"
				selected={selectedValue === 'option2'}
				onClick={() => handleChange('option2')}
			>
				Option 2
			</SegmentedControl.Item>
			{/* Add more SegmentedControl.Item as needed */}
		</SegmentedControl>
	);
}

export default Segment;
