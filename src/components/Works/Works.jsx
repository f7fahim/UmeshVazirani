import React, { useContext } from "react";
import "./Works.css";
 
import { themeContext } from "../../Context";
 
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Selected Publications
          </span>
          <span> </span>
          <span> </span>
          <spane>
          01.  S. Arora, S. Rao, and U. Vazirani,"<a href="https://dl.acm.org/doi/10.1145/1400181.1400204">Geometry, flows, and graph-partitioning algorithms,</a>" Communications ACM, vol. 51, no. 10, pp. 96-105, Oct. 2008.
            <br /><br />
          02.  L. Orecchia, L. J. Schulman, U. Vazirani, and N. K. Vishnoi, "<a href="https://dl.acm.org/doi/10.1145/1374376.1374442">On partitioning graphs via single commodity flows,</a>" in Proc. 40th Annual ACM Symp. on Theory of Computing (STOC 2008), New York, NY: The Association for Computing Machinery, Inc., 2008, pp. 461-470.
            <br /><br />
          03.  A. Mehta, A. Saberi, U. Vazirani, and V. Vazirani, "<a href="https://dl.acm.org/doi/10.1145/1284320.1284321">Adwords and generalized online matching,</a>" J. ACM, vol. 54, no. 5, pp. Art. 22, Oct. 2007.
            <br /><br />
          04.  S. Dasgupta, C. H. Papadimitriou, and U. Vazirani, Algorithms, Boston, MA: McGraw-Hill Higher Education, 2006.
            <br/><br />
          05.  R. Khandekar, S. Rao, and U. Vazirani, "<a href="https://dl.acm.org/doi/10.1145/1132516.1132574">Graph partitioning using single commodity flows,</a>" in Proc. 38th Annual ACM Symp. on Theory of Computing, New York, NY: ACM Press, 2006, pp. 385-390.
            <br/><br />
          06.  A. Mehta, A. Saberin, U. Vazirani, and V. Vazirani, "<a href="https://ieeexplore.ieee.org/document/">AdWords and generalized on-line matching,</a>" in Proc. 46th Annual IEEE Symp. on Foundations of Computer Science, Los Alamitos, CA: IEEE Computer Society Press, 2005, pp. 264-273.
            <br/><br />
          07.  S. Arora, S. Rao, and U. Vazirani, "<a href="https://dl.acm.org/doi/10.1145/1007352.1007355">Expander flows, geometric embeddings and graph partitioning,</a>" in Proc. 36th Annual ACM Symp. on Theory of Computing, New York, NY: ACM Press, 2004, pp. 222-231.
            <br/><br />
          08.  M. Grigni, L. J. Schulman, M. Vazirani, and U. Vazirani, "<a href="https://dl.acm.org/doi/10.1007/s00493-004-0009-8">Quantum mechanical algorithms for the nonabelian hidden subgroup problem,</a>" Combinatorica, vol. 24, no. 1, pp. 137-154, Jan. 2004.
            <br/><br />
          09.  P. L. Vora, V. E. Knapp, and U. V. Vazirani, "<a href="https://ppubs.uspto.gov/pubwebapp/static/pages/landing.html">Probabilistic privacy protection,</a>" U.S. Patent 6,470,299. Oct. 2002.
            <br/><br />
          10.  W. van Dam, M. Mosca, and U. Vazirani, "<a href="https://ieeexplore.ieee.org/document/959902">How powerful is adiabatic quantum computation?,</a>" in Proc. 42nd IEEE Symp. on Foundations of Computer Science, Los Alamitos, CA: IEEE Computer Society Press, 2001, pp. 279-287.
            <br/><br />
          11.  E. Bernstein and U. Vazirani, "<a href="http://siamdl.aip.org/getpdf/servlet/GetPDFServlet?filetype=pdf&id=SMJCAT000026000005001411000001&idtype=cvips">Quantum complexity theory,</a>" SIAM J. on Computing, vol. 26, no. 5, pp. 1411-1473, Oct. 1997.
            <br/><br />
          12.  C. H. Bennett, E. Bernstein, G. Brassard, and U. Vazirani, "<a href="http://siamdl.aip.org/getpdf/servlet/GetPDFServlet?filetype=pdf&id=SMJCAT000026000005001510000001&idtype=cvips">Strengths and weaknesses of quantum computing,</a>" SIAM J. on Computing, vol. 26, no. 5, pp. 1510-1523, Oct. 1997.
            <br/><br />
          13.  M. J. Kearns and U. Vazirani, An Introduction to Computational Learning Theory, Cambridge, MA: MIT Press, 1994.
            <br/><br />
          14.  R. M. Karp, U. Vazirani, and V. V. Vazirani, "<a href="https://dl.acm.org/doi/10.1145/100216.100262">An optimal algorithm for on-line bipartite matching,</a>" in Proc. 22nd Annual ACM Symp. on Theory of Computing, H. Ortiz, Ed., New York, NY: ACM Press, 1990, pp. 352-358.
            <br/><br />
          15.  K. Mulmuley, U. Vazirani, and V. V. Vazirani, "<a href="https://dl.acm.org/doi/10.1145/28395.383347">Matching is as easy as matrix inversion,</a>" in Proc. 19th Annual ACM Conf. on Theory of Computing, A. V. Aho, Ed., New York, NY: ACM Press, 1987, pp. 345-354.
            <br/><br />
          16.  M. Santha and U. Vazirani, "<a href="https://www.sciencedirect.com/science?_ob=PublicationURL&_tockey=%23TOC%236864%231986%23999669998%23472936%23FLP%23&_cdi=6864&_pubType=J&view=c&_auth=y&_acct=C000059607&_version=1&_urlVersion=0&_userid">Generating quasi-random sequences from semi-random sources,</a>" J. Computer and System Sciences, vol. 33, no. 1, pp. 75-87, Aug. 1986.
            <br/><br />
          17.  U. Vazirani and V. V. Vazirani, "Random polynomial time is equal to slightly-random polynomial time," in Proc. 26th Annual IEEE Symp. on Foundations of Computer Science, Washington, DC: IEEE Computer Society Press, 1985, pp. 417-428.
          </spane>
           
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
        
    </div>
  );
};

export default Works;
