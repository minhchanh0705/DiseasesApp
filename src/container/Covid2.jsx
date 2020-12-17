import "../css/Covid.css";

function Covid() {
  return (
    <div id="container">
      <p>
        <strong>Malaria Cases in the last three weeks</strong>
      </p>
      <div id="flex-container">
        <p>North Region</p>
        <div class="region">
          <div id="northRegion">
            <div class="week">W28</div>
            <div class="week">W27</div>
            <div class="week">W26</div>
          </div>
          <div class="figureColumm">
            <div class="figure">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>2</strong> Cases
            </div>
          </div>
          <div class="figureColumm">
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>2</strong> Deaths
            </div>
          </div>
        </div>
        <p>South Region</p>
        <div class="region">
          <div id="southRegion">
            <div class="week">W28</div>
            <div class="week">W27</div>
            <div class="week">W26</div>
          </div>
          <div class="figureColumm">
            <div class="figure">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>2</strong> Cases
            </div>
          </div>
          <div class="figureColumm">
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>2</strong> Deaths
            </div>
          </div>
        </div>
        <p>Central Region</p>
        <div class="region">
          <div id="centralRegion">
            <div class="week">W28</div>
            <div class="week">W27</div>
            <div class="week">W26</div>
          </div>
          <div class="figureColumm">
            <div class="figure">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>2</strong> Cases
            </div>
          </div>
          <div class="figureColumm">
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>2</strong> Deaths
            </div>
          </div>
        </div>

        <p>Central Highland Region</p>
        <div class="region">
          <div id="centralHighlandRegion">
            <div class="week">W28</div>
            <div class="week">W27</div>
            <div class="week">W26</div>
          </div>
          <div class="figureColumm">
            <div class="figure" id="test">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>0</strong> Cases
            </div>
            <div class="figure">
              <strong>2</strong> Cases
            </div>
          </div>
          <div class="figureColumm">
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>0</strong> Deaths
            </div>
            <div class="figure">
              <strong>2</strong> Deaths
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Covid;
