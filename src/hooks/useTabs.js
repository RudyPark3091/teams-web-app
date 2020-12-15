import { useState } from 'react';

const useTabs = (initialTab, allTabs) => {
	const [currentTab, setCurrentTab] = useState(initialTab);

	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	return {
		currentItem: allTabs[currentTab],
		changeItem: setCurrentTab
	};
}

export default useTabs;

