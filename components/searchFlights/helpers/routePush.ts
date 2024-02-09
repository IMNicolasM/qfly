import { BUSINESS_UNIT_PASSENGER } from "src/modules/qramp/_components/model/constants";
import { Flightaware } from "../models/interfaces";
import { ROUTE_PASSENGER, ROUTE_RAMP } from "../models/defaultModels/constants";

export function routePush(proxy: any, flight: Flightaware | null): void {
    if (!(flight as Flightaware).workOrder) return;
    const workOrder = (flight as Flightaware).workOrder || {};
    const routeName = workOrder.businessUnitId === BUSINESS_UNIT_PASSENGER ? ROUTE_PASSENGER : ROUTE_RAMP
    proxy.$router.push({
        name: routeName,
        query: { edit: workOrder.id }
    }).catch((error) => {
        if (error.name != ('NavigationDuplicated')) console.log(error);
    });
}