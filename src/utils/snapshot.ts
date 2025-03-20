import html2canvas from 'html2canvas';

export const createContentSnapshot = async (element: HTMLElement): Promise<string> => {
  try {
    // Create a canvas from the DOM element
    const canvas = await html2canvas(element, {
      backgroundColor: null,
      scale: window.devicePixelRatio || 2,
      logging: false,
      useCORS: true,
      allowTaint: true
    });
    
    // Convert the canvas to a data URL
    return canvas.toDataURL('image/png');
  } catch (error) {
    console.error('Error creating content snapshot:', error);
    return '';
  }
};