import { Component, OnInit } from '@angular/core';
import {ConnectorService} from '../../services/connector/connector.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private connector: ConnectorService) { }

  ngOnInit(): void {
  }

}
