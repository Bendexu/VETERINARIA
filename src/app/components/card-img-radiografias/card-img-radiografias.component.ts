import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-img-radiografias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-img-radiografias.component.html',
  styleUrl: './card-img-radiografias.component.css'
})
export class CardImgRadiografiasComponent {
  images: { url: string, name: string }[] = [];

  onFileSelected(event: any): void {
    const files = event.target.files;

    for (let file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push({ url: e.target.result, name: file.name });
      };
      reader.readAsDataURL(file);
    }
  }

  downloadImage(url: string, name: string): void {
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
  }
}
