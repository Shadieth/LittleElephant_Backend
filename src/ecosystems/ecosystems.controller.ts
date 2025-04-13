import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateEcosystemDto } from './dtos/create-ecosystem.dto';
import { CreateEcosystemService } from './services/create-ecosystem.service';
import { DeleteEcosystemService } from './services/delete-ecosystem.service';
import { Ecosystem } from './interfaces/ecosystem.interface';
import { GetAllEcosystemsService } from './services/get-all-ecosystem.service';
import { UpdateEcosystemService } from './services/update-ecosystem.service';
import { UpdateEcosystemDto } from './dtos/update-ecosystem.dto';

@Controller('ecosystems')
export class EcosystemsController {
  constructor(
    private readonly ecosystemService: CreateEcosystemService,
    private readonly getAllEcosystems: GetAllEcosystemsService,
    private readonly deleteEcosystemService: DeleteEcosystemService,
    private readonly updateEcosystemService: UpdateEcosystemService,
) {}

  @Post()
  async create(@Body() createEcosystemDto: CreateEcosystemDto): Promise<Ecosystem> {
    return await this.ecosystemService.createEcosystem(createEcosystemDto);
  }

  @Get()
  async findAll(): Promise<Ecosystem[]> {
    return await this.getAllEcosystems.getAllEcosystems();
  }

  @Delete(':id')
  async deleteEcosystem(@Param('id') id: string): Promise<void> {
    return await this.deleteEcosystemService.deleteEcosystem(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEcosystemDto: UpdateEcosystemDto
  ) {
    return this.updateEcosystemService.update(id, updateEcosystemDto);
  }
}
