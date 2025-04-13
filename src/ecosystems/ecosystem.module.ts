import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EcosystemsController } from './ecosystems.controller';
import { CreateEcosystemService } from './services/create-ecosystem.service';
import { EcosystemRepository } from './ecosystems.repository';
import { EcosystemModel } from './schemas/ecosystem.schema';
import { GetAllEcosystemsService } from './services/get-all-ecosystem.service';
import { DeleteEcosystemService } from './services/delete-ecosystem.service';
import { UpdateEcosystemService } from './services/update-ecosystem.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ecosystem', schema: EcosystemModel.schema }]), // Aquí debes usar EcosystemModel.schema
  ],
  controllers: [EcosystemsController],
  providers: [
    CreateEcosystemService, 
    GetAllEcosystemsService,
    DeleteEcosystemService,
    UpdateEcosystemService,
    EcosystemRepository
],
})
export class EcosystemModule {}
