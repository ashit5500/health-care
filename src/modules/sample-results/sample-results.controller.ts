import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { SampleResultsService } from './sample-results.service';
import { CreateSampleResultDto } from './dto/create-sample-result.dto';
import { UpdateSampleResultDto } from './dto/update-sample-result.dto';

@Controller('sample-results')
export class SampleResultsController {
  constructor(private readonly sampleResultsService: SampleResultsService) {}

  @Post()
  create(@Body() createSampleResultDto: CreateSampleResultDto) {
    return this.sampleResultsService.create(createSampleResultDto);
  }

  @Get()
  findAll(@Req() req) {
    const { disease} = req.query;
    const query = {};

    if(disease) query['disease'] = disease;
    return this.sampleResultsService.findAll(query);
  }

  @Get(':id')
  findOne() {
    return this.sampleResultsService.findOne({});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSampleResultDto: UpdateSampleResultDto) {
    return this.sampleResultsService.update(+id, updateSampleResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sampleResultsService.remove(id);
  }
}
