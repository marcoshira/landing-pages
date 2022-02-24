export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;
      if (text_grid.length > 0) {
        return mapSectionTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapSectionImageGrid(section);
      }
    }
    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapSectionTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return { title, description };
    }),
  };
};

export const mapSectionImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img) => {
      const { image: { data: { attributes: { url: srcImg = '', alternativeText: altText = '' } = '' } = '' } = '' } =
        img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
