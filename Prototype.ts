export class HotelInfoDetails {
    hotelName: string = "";
    hotelEmailId: string = "";
    hotelContactNumber: number = 0;
    hotelLandmark: string = "";
    hotelAddress: string = "";
    hotelStartingPrice: number = 0;
    hotelDescription: string = "";
    hotelStarRating: number = 0;
    hotelImageUrl: string = "";
    hotelState: string = "";
    hotelCity: string = "";
    hotelCountry: string = "";
    hotelRegion: string = "";
    hotelPincode: string = "";
  
    hotelSlugsDetails: SlugDetails = {
      hotel: "",
      hotelCity: "",
      hotelRegion: "",
      hotelState: "",
      hotelCountry: "",
    };
  
    hotelLongitude: number = 0;
    hotelLatitude: number = 0;
    hotelMapUrl: string = "";
  
    hotelPaymentOption: PaymentOptions = {
      postpaidPayment: false,
      prepaidPayment: false,
      partialPayment: false,
    };
  
    hotelImagesList: ImagesList[] = [];
  }
  
  export class SlugDetails {
    hotel: string = "";
    hotelCity: string = "";
    hotelRegion: string = "";
    hotelState: string = "";
    hotelCountry: string = "";
  }
  
  export class PaymentOptions {
    postpaidPayment: boolean = true;
    prepaidPayment: boolean = true;
    partialPayment: boolean = true;
  }
  
  export class ImagesList {
    imageId: string = "";
    imageUrl: string = "";
    imageTitle: string = "";
  }