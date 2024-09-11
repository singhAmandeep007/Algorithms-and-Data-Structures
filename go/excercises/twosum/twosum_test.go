package twosum

import (
	"reflect"
	"testing"
)

func TestTwoSum(t *testing.T) {
	tests := []struct {
		nums   []int
		target int
		want   []int
	}{
		{[]int{2, 7, 11, 15}, 9, []int{0, 1}},
		{[]int{3, 2, 4}, 6, []int{1, 2}},
		{[]int{3, 3}, 6, []int{0, 1}},
	}

	for _, test := range tests {
		got := TwoSum(test.nums, test.target)
		if !reflect.DeepEqual(got, test.want) {
			t.Errorf("TwoSum(%v, %d) = %v, want %v", test.nums, test.target, got, test.want)
		}
	}
}
