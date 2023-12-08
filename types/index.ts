export type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
  };
  
export interface MenuProps {
    title: string
    linkGroups: Array<{
      label: string
      link: string | null
    }>
  }