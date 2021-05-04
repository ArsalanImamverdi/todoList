
import * as data from './data.json'
export class DataReader {
    public static read<T>(objectName: string): T {
        return data.serviceData[objectName];
    }
}