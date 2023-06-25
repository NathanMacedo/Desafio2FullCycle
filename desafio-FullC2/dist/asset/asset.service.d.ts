import { PrismaService } from "../prisma/prisma/prisma.service";
import { CreateAssetDto } from "./dto/create-asset.dto";
export declare class AssetService {
    private prismaService;
    constructor(prismaService: PrismaService);
    all(): any;
    create(createAssetDto: CreateAssetDto): any;
}
