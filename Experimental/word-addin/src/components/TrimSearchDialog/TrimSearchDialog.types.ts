import { IBaseProps } from "office-ui-fabric-react/lib/Utilities";
import {
	ITrimConnector,
	ITrimMainObject,
} from "../../trim-coms/trim-connector";
import BaseObjectTypes from "../../trim-coms/trim-baseobjecttypes";

export interface ITrimSearchDialog {}

export interface ITrimSearchDialogProps
	extends IBaseProps<ITrimSearchDialog>,
		React.HTMLAttributes<HTMLElement> {
	trimConnector?: ITrimConnector;

	trimType: BaseObjectTypes;

	purpose?: number;
	purposeExtra?: number;
	filter?: string;
	value?: ITrimMainObject[];
	startPoint?: string;

	/** Callback for when a given trim object has been selected */
	onTrimObjectSelected?: (item?: ITrimMainObject) => void;
}
