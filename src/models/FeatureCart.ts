export type FeatureCartItem = { id: number; name: string };

export default interface IFeatureCartDataProps {
  id: number;
  title: string;
  items: FeatureCartItem[];
  projectCount: number;
  color: string;
}
