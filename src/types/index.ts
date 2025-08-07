export type FeatureType = {
  iconName: string;
  title: string;
  desc: string;
};

export type BtnType = {
  to: string;
  content?: string;
};

export type ImageType = {
  name: string;
  widths: string[];
  deviceSizes: string[];
  mediaSizes: string[];
  dir?: string;
  alt?: string;
  dimensions?: [number, number][];
};
export type ImageStoryType = {
  link: {
    desktop: string;
  };
  name: string;
  widths: string[];
  deviceSizes: string[];
  mediaSizes: string[];
  dir?: string;
  alt?: string;
  dimensions?: [number, number][];
};

export type StoryType = {
  datetime: string;
  title: string;
  author: string;
  btn: BtnType;
  image: ImageStoryType;
};

export type SplitType = {
  title: string;
  desc: string;
  btn: BtnType;
  image: ImageStoryType;
};

export type TableFeaturesType = {
  headerCols: string[];
  headerRows: string[];
  plans: {
    name: string;
    features: string[];
  }[];
};

export type PlanType = {
  title: string;
  desc: string;
  prices: number[];
  frequency: string[];
  btn: BtnType;
  highlight?: boolean;
};

export type DataType = {
  features: FeatureType[];
  stories: StoryType[];
  split: SplitType[];
  hero: (StoryType & {
    page: string;
    type?: string;
    subtitle?: string;
    desc: string;
  })[];
  tableFeatures: TableFeaturesType;
  plans: PlanType[];
};
