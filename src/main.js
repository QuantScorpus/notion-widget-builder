import './style.css';
import { HorlogeWidget } from './widgets/horloge.js';
import { SessionWidget } from './widgets/sessions.js';

const container = document.getElementById('widgets-container');

container.appendChild(HorlogeWidget());
container.appendChild(SessionWidget());
