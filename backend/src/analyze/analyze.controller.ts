// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { AnalyzeService } from './analyze.service';
// import { CreateAnalyzeDto } from './dto/create-analyze.dto';
// import { UpdateAnalyzeDto } from './dto/update-analyze.dto';

// @Controller('analyze')
// export class AnalyzeController {
//   constructor(private readonly analyzeService: AnalyzeService) {}

//   @Post()
//   create(@Body() createAnalyzeDto: CreateAnalyzeDto) {
//     return this.analyzeService.create(createAnalyzeDto);
//   }

//   @Get()
//   findAll() {
//     return this.analyzeService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.analyzeService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateAnalyzeDto: UpdateAnalyzeDto) {
//     return this.analyzeService.update(+id, updateAnalyzeDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.analyzeService.remove(+id);
//   }
// }


// analyze.controller.ts
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import * as FormData from 'form-data';
import axios from 'axios';

@Controller('analyze')
export class AnalyzeController {
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async analyzeImage(@UploadedFile() file: Express.Multer.File) {
    const form = new FormData();
    form.append('image', createReadStream(file.path), file.originalname);

    const response = await axios.post('http://localhost:8000/predict', form, {
      headers: form.getHeaders(),
    });

    return response.data;
  }
}
