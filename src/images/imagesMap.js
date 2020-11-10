import upperRightCorner from './upperRightCorner.gif';
import upperLeftCorner from './upperLeftCorner.gif';
import transparentTerminator from './transparentTerminator.gif';
import search_small from './search_small.gif';
import dropdown_button_small from './dropdown_button_small.gif';
import departures from './departures.gif';
import bottomRightCorner from './bottomRightCorner.gif';
import bottomLeftCorner from './bottomLeftCorner.gif';
import arrivings from './arrivings.gif';

const imagesMap = () => {
    let mapOfImages = new Map();
    mapOfImages.set('upperRightCorner', upperRightCorner);
    mapOfImages.set('upperLeftCorner', upperLeftCorner);
    mapOfImages.set('transparentTerminator', transparentTerminator);
    mapOfImages.set('search_small', search_small);
    mapOfImages.set('dropdown_button_small', dropdown_button_small);
    mapOfImages.set('departures', departures);
    mapOfImages.set('bottomRightCorner', bottomRightCorner);
    mapOfImages.set('bottomLeftCorner', bottomLeftCorner);
    mapOfImages.set('arrivings', arrivings);

    return mapOfImages;
}

export default imagesMap;
