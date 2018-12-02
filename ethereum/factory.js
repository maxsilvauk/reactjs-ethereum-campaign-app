import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x61d219DA6050E5e272CEA6a70714ECD042150e91'
);

export default instance;