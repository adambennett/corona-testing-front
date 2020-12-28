import { Component, OnInit } from '@angular/core';
import {ConnectorService} from '../../services/connector/connector.service';

@Component({
  selector: 'app-form-submitted',
  templateUrl: './form-submitted.component.html',
  styleUrls: ['./form-submitted.component.scss']
})
export class FormSubmittedComponent implements OnInit {

  constructor(private connector: ConnectorService) { }

  ngOnInit(): void {
  }

}
