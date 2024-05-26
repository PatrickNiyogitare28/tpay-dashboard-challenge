import { useState } from 'react';

export default function useAccordingTabs() {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

  const accordionTabs = [
    {
      label: 'All Analytics',
      color: 'success',
    },
    {
      label: 'Favorite',
      color: 'danger',
    },
    {
      label: 'New Analytics',
      color: 'warning',
    },
  ];

  const onHandleAnalyticsTab = (index: number) => {
    setActiveAccordionIndex(index);
  };

  return {
    activeAccordionIndex,
    setActiveAccordionIndex,
    accordionTabs,
    onHandleAnalyticsTab,
  };
}
