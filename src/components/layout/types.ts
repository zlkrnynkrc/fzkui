export enum MainAxisAlignment {
  Start = "justify-start",
  Center = "justify-center",
  End = "justify-end",
  SpaceBetween = "justify-between",
  SpaceAround = "justify-around",
  SpaceEvenly = "justify-evenly",
}

export enum CrossAxisAlignment {
  Start = "items-start",
  Center = "items-center",
  End = "items-end",
  Stretch = "items-stretch",
  Baseline = "items-baseline",
}

export enum BoxAlign {
  Start = "self-start",
  Center = "self-center",
  End = "self-end",
  Stretch = "self-stretch",
  Baseline = "self-baseline",
}

export enum BorderStyle {
  None = "",
  All = "border",
  X = "border-x",
  Y = "border-y",
  Top = "border-t",
  Bottom = "border-b",
  Left = "border-l",
  Right = "border-r",
  Dashed = "border-dashed",
  Dotted = "border-dotted",
  Double = "border-double",
  Solid = "border-solid",
}

export enum BorderRadius {
  None = "rounded-none",
  Sm = "rounded-sm",
  Md = "rounded-md",
  Lg = "rounded-lg",
  Xl = "rounded-xl",
  "2xl" = "rounded-2xl",
  "3xl" = "rounded-3xl",
  Full = "rounded-full",
}

export enum ButtonType {
  Default = "default",
  Destructive = "destructive",
  Outline = "outline",
  Secondary = "secondary",
  Ghost = "ghost",
  Link = "link",
}

export enum ChipType {
  Default = "default",
  Secondary = "secondary",
  Outline = "outline",
  Destructive = "destructive",
}

export enum BadgeType {
  Default = "default",
  Secondary = "secondary",
  Destructive = "destructive",
  Outline = "outline",
}

export enum Width {
  Auto = "w-auto",
  Px = "w-px",
  Full = "w-full",
  Screen = "w-screen",
  Fit = "w-fit",
  Min = "w-min",
  Max = "w-max",
  "1/2" = "w-1/2",
  "1/3" = "w-1/3",
  "2/3" = "w-2/3",
  "1/4" = "w-1/4",
  "3/4" = "w-3/4",
  "1/5" = "w-1/5",
  "2/5" = "w-2/5",
  "3/5" = "w-3/5",
  "4/5" = "w-4/5",
  "1/6" = "w-1/6",
  "5/6" = "w-5/6",
  "1/12" = "w-1/12",
  "11/12" = "w-11/12",
  "w4" = "w-4",
  "w16" = "w-16",
  "w24" = "w-24",
  "w28" = "w-28",
  "w32" = "w-32",
  "w48" = "w-48",
  "250px" = "w-[250px]",
  "280px" = "w-[280px]",
  "300px" = "w-[300px]",
}

export enum Height {
  Auto = "h-auto",
  Px = "h-px",
  Full = "h-full",
  Screen = "h-screen",
  Fit = "h-fit",
  Min = "h-min",
  Max = "h-max",
  "h4" = "h-4",
  "h16" = "h-16",
  "h20" = "h-20",
  "h24" = "h-24",
  "h32" = "h-32",
  "h40" = "h-40",
  "h48" = "h-48",
  "300px" = "h-[300px]",
  "Min_200px" = "min-h-[200px]",
  "Min_250px" = "min-h-[250px]",
  "Min_300px" = "min-h-[300px]",
  "Calc_100_minus_80px" = "h-[calc(100%-80px)]",
}

export interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  width?: Width;
  height?: Height;
  borderStyle?: BorderStyle;
  borderRadius?: BorderRadius;
}

export interface FlexLayoutProps extends LayoutProps {
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
  gap?: string;
}

export interface BoxProps extends LayoutProps {
  align?: BoxAlign;
}

export interface ScaffoldProps extends LayoutProps {
  appBar?: React.ReactNode;
  body: React.ReactNode;
  floatingActionButton?: React.ReactNode;
  bottomAppBar?: React.ReactNode;
  appBarHeightPx?: number;
  bottomAppBarHeightPx?: number;
}

export interface DialogProps extends LayoutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export interface ActionSheetProps extends DialogProps {
  // ActionSheet uses Drawer, which has similar props to Dialog
  // No additional specific props needed here for now, inherits from DialogProps
}

export interface ListViewProps extends LayoutProps {
  gap?: string;
}

export const GridColumns = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  None: "grid-cols-none",
} as const;

export type GridColumns = (typeof GridColumns)[keyof typeof GridColumns];

export interface GridViewProps extends LayoutProps {
  gap?: string;
  columns?: GridColumns;
}

export interface DataTableColumn {
  key: string;
  header: string;
}

export interface DataTableProps extends LayoutProps {
  columns: DataTableColumn[];
  data: Record<string, any>[];
}

export interface BottomAppBarProps extends LayoutProps {
  actions?: React.ReactNode;
}
