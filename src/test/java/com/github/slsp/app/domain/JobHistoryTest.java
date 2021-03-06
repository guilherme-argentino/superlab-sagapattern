package com.github.slsp.app.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.github.slsp.app.web.rest.TestUtil;
import java.util.UUID;

public class JobHistoryTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(JobHistory.class);
        JobHistory jobHistory1 = new JobHistory();
        jobHistory1.setId(UUID.randomUUID());
        JobHistory jobHistory2 = new JobHistory();
        jobHistory2.setId(jobHistory1.getId());
        assertThat(jobHistory1).isEqualTo(jobHistory2);
        jobHistory2.setId(UUID.randomUUID());
        assertThat(jobHistory1).isNotEqualTo(jobHistory2);
        jobHistory1.setId(null);
        assertThat(jobHistory1).isNotEqualTo(jobHistory2);
    }
}
