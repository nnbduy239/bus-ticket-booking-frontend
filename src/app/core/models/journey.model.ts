export interface Journey {
  id: number;
  BusName: string;
  DepartureTime: string;
  Source: string;
  startingPoint: string;
  destinationStation: string;
  Destination: string;
  Fare: number;
  CoachType: string;
  SeatsAvailable: number;
  bookings: any;
}
