import { Component, OnInit } from '@angular/core';
import { PersonalizationService } from 'src/app/shared/services/personalization.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  constructor(
    public personalizationService: PersonalizationService
  ) { }

  ngOnInit(): void {
    this.personalizationService.renderUserImage();
  }

}
