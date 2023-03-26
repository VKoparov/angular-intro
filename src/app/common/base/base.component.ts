import {Component, Inject} from '@angular/core';
import {SourceCodeView} from "../../models/source-code";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {

  header!: string;

  sourceCodeView!: SourceCodeView;

  constructor(
      protected httpClient: HttpClient,
      @Inject(String) header: string,
      @Inject({}) component: any,
      @Inject({}) files: { location: string, name: string, discriminatorType: string }[]
  ) {
    this.setHeader(header);
    this.setSourceCodeView(component, files);
  }

  setHeader(header: string) {
    this.header = header;
  }

  setSourceCodeView(component: any, files: { location: string, name: string, discriminatorType: string }[]): void {
    this.sourceCodeView = {
      sourceCodeData: [],
      component: component
    };

    files.forEach(file => {
      this.httpClient.get(`app/${file.location}/${file.name}`, {responseType: 'text'})
          .subscribe((data: string) => {
            const regex = new RegExp(`${file.discriminatorType}[\\s\\S]*`, 'i');
            const match = data.match(regex);

            this.sourceCodeView.sourceCodeData.push({
              fileName: file.name,
              code: (match as any)[0]
            })
          });
    });
  }
}
