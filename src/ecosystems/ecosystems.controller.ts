import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateEcosystemDto } from './dtos/create-ecosystem.dto';
import { UpdateEcosystemDto } from './dtos/update-ecosystem.dto';
import { CreateEcosystemService } from './services/create-ecosystem.service';
import { GetAllEcosystemsService } from './services/get-all-ecosystem.service';
import { DeleteEcosystemService } from './services/delete-ecosystem.service';
import { UpdateEcosystemService } from './services/update-ecosystem.service';
import { Ecosystem } from './interfaces/ecosystem.interface';

@Controller('ecosystems')
export class EcosystemsController {
  constructor(
    private readonly ecosystemService: CreateEcosystemService,
    private readonly getAllEcosystems: GetAllEcosystemsService,
    private readonly deleteEcosystemService: DeleteEcosystemService,
    private readonly updateEcosystemService: UpdateEcosystemService,
  ) {}

  /**
   * Endpoint para crear un nuevo ecosistema.
   * @param createEcosystemDto - Datos para crear el ecosistema.
   * @returns El ecosistema creado.
   */
  @Post()
  async create(@Body() createEcosystemDto: CreateEcosystemDto): Promise<Ecosystem> {
    return await this.ecosystemService.createEcosystem(createEcosystemDto);
  }

  /**
   * Endpoint para obtener todos los ecosistemas existentes.
   * @returns Un array de ecosistemas.
   */
  @Get()
  async findAll(): Promise<Ecosystem[]> {
    return await this.getAllEcosystems.getAllEcosystems();
  }

  /**
   * Endpoint para eliminar un ecosistema por su ID.
   * @param id - ID del ecosistema a eliminar.
   */
  @Delete(':id')
  async deleteEcosystem(@Param('id') id: string): Promise<void> {
    return await this.deleteEcosystemService.deleteEcosystem(id);
  }

  /**
   * Endpoint para actualizar un ecosistema por su ID.
   * @param id - ID del ecosistema a actualizar.
   * @param updateEcosystemDto - Nuevos datos para actualizar el ecosistema.
   * @returns El ecosistema actualizado.
   */
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEcosystemDto: UpdateEcosystemDto,
  ) {
    return this.updateEcosystemService.update(id, updateEcosystemDto);
  }
}

