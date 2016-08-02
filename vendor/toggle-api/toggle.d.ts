import { SelectionMethod } from './selection_methods/selection_method';
export interface ToggleData {
    Id: string;
    Description: string;
    SelectionAlgorithm: string;
    EnableInVersions: string;
    Options: ToggleOptionData[];
}
export declare class Toggle implements ToggleData {
    Id: string;
    Description: string;
    SelectionAlgorithm: string;
    EnableInVersions: string;
    Options: ToggleOptionData[];
    static CreateFromData(data: ToggleData): Toggle;
    getSelectionAlgorithm(): SelectionMethod;
    getOption(userId: string, default_value: string | boolean, version?: string): string | boolean;
    getSelection(userId: string, default_value: string | boolean): string | boolean;
    enabledIn(version: string): boolean;
}
export interface ToggleOptionData {
    Value: string | boolean;
    Cutoff: number;
}
export interface ToggleSelectionData {
    ToggleId: string;
    OptionValue: string | boolean;
}
export declare class ToggleSelection implements ToggleSelectionData {
    ToggleId: string;
    OptionValue: string | boolean;
    static CreateFromData(data: ToggleSelectionData): ToggleSelection;
}
