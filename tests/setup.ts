import * as dotenv from 'dotenv';
import { TelemetryClient } from 'telemetry.trello.js';

dotenv.config();

TelemetryClient.prototype.sendTelemetry = () => Promise.resolve();
