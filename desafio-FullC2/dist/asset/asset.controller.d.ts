import { AssetService } from "./asset.service";
import { CreateAssetDto } from "./dto/create-asset.dto";
export declare class AssetController {
    private assetService;
    constructor(assetService: AssetService);
    listAssets(): any;
    createAsset(createAssetDto: CreateAssetDto): any;
}
