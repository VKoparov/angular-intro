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
      @Inject(String) pathUrl: string,
      @Inject({}) files: { location: string, name: string, discriminatorType: string }[],
      @Inject({}) component?: any
  ) {
    this.setHeader(header);
    this.setSourceCodeView(component, pathUrl, files);
  }

  setHeader(header: string) {
    this.header = header;
  }

  setSourceCodeView(component: any, pathUrl: string, files: { location: string, name: string, discriminatorType: string }[]): void {
    this.sourceCodeView = {
      sourceCodeData: [],
      component: component
    };

    files.forEach(file => {
      this.httpClient.get(`${pathUrl}/${file.location}/${file.name}`, {responseType: 'text'})
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
