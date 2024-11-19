import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { SamplesService } from './samples.service';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';

@Controller('samples')
export class SamplesController {
  constructor(private readonly samplesService: SamplesService) {}

  @Post()
  create(@Body() createSampleDto: CreateSampleDto) {
    return this.samplesService.create(createSampleDto);
  }

  @Get()
  findAll(@Req() req) {
    const { disease} = req.query;
    const query = {};

    if(disease) query['disease'] = disease;
    return this.samplesService.findAll(query);
  }

  @Get(':id')
  findOne() {
    const query ={};
    return this.samplesService.findOne(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSampleDto: UpdateSampleDto) {
    return this.samplesService.update(+id, updateSampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.samplesService.remove(id);
  }
}
