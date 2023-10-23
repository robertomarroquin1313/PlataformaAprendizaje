
            for (let i = 1; i <= 20; i++) {
                let nombre = "Estudiante " + i;
                document.write('<tr>');
                document.write('<td>' + nombre + '</td>');
                for (let j = 1; j <= 16; j++) {
                    document.write('<td>');
                    document.write('<div class="form-check">');
                    document.write('<input type="radio" class="form-check-input" name="asistencia_' + i + '_' + j + '" value="falta">');
                    document.write('<label class="form-check-label">Falta</label>');
                    document.write('</div>');
                    document.write('<div class="form-check">');
                    document.write('<input type="radio" class="form-check-input" name="asistencia_' + i + '_' + j + '" value="permiso">');
                    document.write('<label class="form-check-label">Permiso</label>');
                    document.write('</div>');
                    document.write('<div class="form-check">');
                    document.write('<input type="radio" class="form-check-input" name="asistencia_' + i + '_' + j + '" value="asistencia" checked>');
                    document.write('<label class="form-check-label">Asistencia</label>');
                    document.write('</div>');
                    document.write('</td>');
                }
                document.write('</tr>');
            }